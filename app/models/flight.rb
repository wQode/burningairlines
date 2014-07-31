# == Schema Information
#
# Table name: flights
#
#  id          :integer          not null, primary key
#  name        :string(255)
#  origin      :string(255)
#  destination :string(255)
#  date        :string(255)
#  airplane_id :integer
#  created_at  :datetime
#  updated_at  :datetime
#

class Flight < ActiveRecord::Base
  belongs_to :airplane
  has_many :users
end