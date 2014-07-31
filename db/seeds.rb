Airplane.destroy_all
Flight.destroy_all
User.destroy_all


a1 = Airplane.create(:name =>'AirForce 1', :rows =>'10', :colums => '21')
a2 = Airplane.create(:name =>'AirForce 2', :rows =>'10', :colums => '22')

f1 = Flight.create(:name => '234', :origin => 'SYD', :destination => 'BNE', :date => '12/12/14')
f2 = Flight.create(:name => '235', :origin => 'SYD', :destination => 'NYC', :date => '02/02/14')

u1 = User.create(:username => 'Rira')
u2 = User.create(:username => 'Yuko')

f1.airplane = a1
f2.airplane = a2

f1.save
u2.save

a1.save
a2.save



