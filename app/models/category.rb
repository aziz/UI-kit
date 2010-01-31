class Category < ActiveRecord::Base
  has_many :components
  ActiveRecord::Base.include_root_in_json = false  
  #acts_as_category  
  
  def self.decrease_counter_cache_for(category_id)
    if category_id && category_id.is_a?(Integer)
      cat = self.find(category_id)
      cat.components_count = cat.components_count - 1
      cat.save
    end
  end

  def self.increase_counter_cache_for(category_id)
    if category_id && category_id.is_a?(Integer)    
      cat = self.find(category_id)
      cat.components_count = cat.components_count + 1
      cat.save
    end
  end

end
