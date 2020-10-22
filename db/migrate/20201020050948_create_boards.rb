class CreateBoards < ActiveRecord::Migration[5.2]
  def change
    create_table :boards do |t|
      t.string :name, null: false
      t.integer :user_id, null: false
      t.text :description
      t.timestamps
    end
  end
end
