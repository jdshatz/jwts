class Candidate < ApplicationRecord
  has_many :issues
  has_one :position, through: :issue
end