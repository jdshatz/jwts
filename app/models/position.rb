class Position < ApplicationRecord
  belongs_to :issue 
  belongs_to :candidate
end