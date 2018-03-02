"""empty message

Revision ID: 97ce4dae17ea
Revises: b53ae8fa4bb2
Create Date: 2018-02-26 15:37:59.543227

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '97ce4dae17ea'
down_revision = 'b53ae8fa4bb2'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('tags',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('friend_id', sa.Integer(), nullable=True),
    sa.Column('name', sa.String(), nullable=True),
    sa.ForeignKeyConstraint(['friend_id'], ['friends.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.add_column(u'users', sa.Column('profile_url', sa.String(length=512), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column(u'users', 'profile_url')
    op.drop_table('tags')
    # ### end Alembic commands ###