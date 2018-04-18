"""empty message

Revision ID: 063d6797660d
Revises: 573777f767d4
Create Date: 2018-04-16 17:34:23.393572

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '063d6797660d'
down_revision = '573777f767d4'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('friends', sa.Column('last_contacted', sa.DateTime(), nullable=True))
    op.add_column('friends', sa.Column('num_weeks_reminder', sa.Integer(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('friends', 'num_weeks_reminder')
    op.drop_column('friends', 'last_contacted')
    # ### end Alembic commands ###
