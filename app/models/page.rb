class Page < ApplicationRecord
  belongs_to :notebook
  has_many :paragraphs, dependent: :delete_all
  has_many :image_elements, dependent: :delete_all
  has_many :checklists, dependent: :delete_all

  def elements
    paragraphs + image_elements + checklists
  end
end
