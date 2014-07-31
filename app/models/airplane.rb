# == Schema Information
#
# Table name: airplanes
#
#  id         :integer          not null, primary key
#  name       :string(255)
#  rows       :string(255)
#  colums     :string(255)
#  created_at :datetime
#  updated_at :datetime
#

class Airplane < ActiveRecord::Base
  has_many :flights
end
