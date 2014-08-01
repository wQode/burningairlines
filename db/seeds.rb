Airplane.destroy_all
Flight.destroy_all
User.destroy_all
Reservation.destroy_all


a1 = Airplane.create(:name =>'AirForce 1', :rows =>'5', :colums => '4')
a2 = Airplane.create(:name =>'AirForce 2', :rows =>'5', :colums => '4')

f1 = Flight.create(:name => 'BS-1oU', :origin => 'SYD', :destination => 'WA', :date => '12/12/14')
f2 = Flight.create(:name => 'BS-Ur8', :origin => 'WA', :destination => 'SYD', :date => '02/02/14')

u1 = User.create(:username => 'Riira')
u2 = User.create(:username => 'Yuuko')

r1 = Reservation.create(:seat_number => "1")
r2 = Reservation.create(:seat_number => "4")

f1.airplane = a1
f2.airplane = a2

f1.save
f2.save

u1.save
u2.save

a1.save
a2.save


