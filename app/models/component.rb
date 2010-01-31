class Component < ActiveRecord::Base
  belongs_to :category, :counter_cache => true
  ActiveRecord::Base.include_root_in_json = false
  #acts_as_category_content  
end
