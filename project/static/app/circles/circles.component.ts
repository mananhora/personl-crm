import { Component, OnInit } from '@angular/core';
import { CirclesService } from './circles.service';
import { FriendsService } from '../friends/friends.service';
import { Router } from '@angular/router';
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

  public nodes = new VisNodes([ ]);
  public edges = new VisEdges([ ]);
  public visNetwork: string = 'networkId1';
  public visNetworkData: ExampleNetworkData;
  public visNetworkOptions: VisNetworkOptions;

  constructor(private circlesService: CirclesService,
    private friendsService: FriendsService,
    private visNetworkService: VisNetworkService,
    private router: Router) { }

  getAllCircles() {
    let myVillageNode = {
      id: 0,
      label: 'myVillage',
      color: '#80ccc5',
      mass: 1,
      shape: 'circle',
      shadow: {
        enabled: true,
        color: 'rgba(0,0,0,0.5)',
        size: 10,
        x: -3,
        y: 3,
      },
      font: {
        face: 'sayless',
        size: 20,
      },
    };
    this.nodes.add(myVillageNode as VisNode);

    this.circlesService.getCircles()
      .subscribe(data => {
        for (let i = 0; i < data['json_list'].length; i++) {
          let name = data['json_list'][i]['circle_name'];
          let id = data['json_list'][i]['id'];

          let myNode = {
            id: id,
            label: name,
            color: '#80ccc5',
            mass: 2,
            shape: 'circle',
            shadow: {
              enabled: true,
              color: 'rgba(0,0,0,0.2)',
              size: 10,
              x: -3,
              y: 3,
            },
            font: {
              face: 'Roboto',
              size: 18,
            },
          };
          this.nodes.add(myNode as VisNode);
          this.edges.add({ from: '0', to: id });
        }
        this.visNetworkService.fit(this.visNetwork);
    });
  }

   public networkInitialized(): void {
     this.visNetworkService.on(this.visNetwork, 'click');
     this.visNetworkService.click
       .subscribe((eventData: any[]) => {
           if (eventData[0] === this.visNetwork) {
             let id = eventData[1].nodes[0];
             this.router.navigate(['/app/friends/', id]);
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
