class CreateIssues < ActiveRecord::Migration[5.0]
  def change
    create_table :issues do |t|
      t.string :issname
      t.integer :candidate_id
      t.string :position_id
      t.string :integer

      t.timestamps
    end
  end
end
