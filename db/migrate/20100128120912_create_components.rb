class CreateComponents < ActiveRecord::Migration
  def self.up
    create_table :components do |t|
      t.string :title
      t.text :html
      t.text :css
      t.text :javascript
      t.integer :category_id
      t.text :notes
      t.string :firefox
      t.string :safari
      t.string :webkit
      t.string :opera
      t.string :ie
      t.string :chrome

      t.timestamps
    end
  end

  def self.down
    drop_table :components
  end
end
