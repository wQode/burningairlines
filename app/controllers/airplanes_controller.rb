class AirplanesController < ApplicationController

  def index


  end


  def create
  end

  def new
  end

  def edit
  end

  def show
  end

  def destroy
  end


  private
    def airplanes_params
      params.require(:airplane).permit(:name, :rows, :colums)
    end

end

# airplanes GET    /airplanes(.:format)          airplanes#index
#               POST   /airplanes(.:format)          airplanes#create
#  new_airplane GET    /airplanes/new(.:format)      airplanes#new
# edit_airplane GET    /airplanes/:id/edit(.:format) airplanes#edit
#      airplane GET    /airplanes/:id(.:format)      airplanes#show
#               PATCH  /airplanes/:id(.:format)      airplanes#update
#               PUT    /airplanes/:id(.:format)      airplanes#update
#               DELETE /airplanes/:id(.:format)      airplanes#destroy


 # create_table "airplanes", force: true do |t|
 #    t.string   "name"
 #    t.string   "rows"
 #    t.string   "colums"
 #    t.datetime "created_at"
 #    t.datetime "updated_at"
 #  end