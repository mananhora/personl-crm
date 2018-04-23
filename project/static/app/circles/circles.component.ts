import { Component, OnInit } from '@angular/core';
import { CirclesService } from './circles.service';
import { FriendsService } from '../friends/friends.service';
import { Circle } from './circle';
import { Profile } from '../profile/profile';
import {
  VisNode,
  VisNodes,
  VisEdges,
  VisNetworkService,
  VisNetworkData,
  VisNetworkOptions
} from '../../../../node_modules/ng2-vis/components/network';

class ExampleNetworkData implements VisNetworkData {
    public nodes: VisNodes;
    public edges: VisEdges;
}

@Component({
  selector: 'app-circles',
  templateUrl: './circles.component.html',
  styleUrls: ['./circles.component.css']
})

export class CirclesComponent implements OnInit {

  circles: Circle[];
  friends: Profile[];

  public nodes = new VisNodes([ { id: '0', label: 'myVillage' } ]);
  public edges = new VisEdges([ ]);
  public visNetwork: string = 'networkId1';
  public visNetworkData: ExampleNetworkData;
  public visNetworkOptions: VisNetworkOptions;

  constructor(private circlesService: CirclesService,
    private friendsService: FriendsService,
    private visNetworkService: VisNetworkService) { }

  getAllCircles() {
    this.circlesService.getCircles()
      .subscribe(data => {
        for (let i = 0; i < data['json_list'].length; i++) {
          let name = data['json_list'][i]['circle_name'];
          let id = data['json_list'][i]['id'];

          this.visNetworkData.nodes.add({ id: id, label: name });
          this.visNetworkService.fit(this.visNetwork);
          this.edges.add({ from: '0', to: id });
        }
    });
  }

   public networkInitialized(): void {
     // now we can use the service to register on events
     this.visNetworkService.on(this.visNetwork, 'click');

     // open your console/dev tools to see the click params
     this.visNetworkService.click
       .subscribe((eventData: any[]) => {
           if (eventData[0] === this.visNetwork) {
             console.log(eventData[1]);
           }
       });
   }

  ngOnInit() {
    this.getAllCircles();

    const nodes = this.nodes;
    const edges = this.edges;
    this.visNetworkData = {
      nodes,
      edges,
    };

    this.visNetworkOptions = {};
  }

}
