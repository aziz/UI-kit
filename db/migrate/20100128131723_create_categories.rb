class CreateCategories < ActiveRecord::Migration
  def self.up
    create_table :categories do |t|
      t.integer :parent_id
      t.integer :children_count, :default => 0
      t.integer :ancestors_count, :default => 0
      t.integer :descendants_count, :default => 0
      t.boolean :hidden
      t.string  :name
      t.integer :position
      t.integer :components_count, :default => 0

      t.timestamps
    end
  end

  def self.down
    drop_table :categories
  end
end
