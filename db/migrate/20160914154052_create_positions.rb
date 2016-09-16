class CreatePositions < ActiveRecord::Migration[5.0]
  def change
    create_table :positions do |t|
      t.integer :candidate_id
      t.integer :issue_id
      t.text :position

      t.timestamps
    end
  end
end
