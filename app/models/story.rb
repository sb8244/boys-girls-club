class Story < ActiveRecord::Base
  validates :role, inclusion: { in: %w(mentor mentee parent) }

  has_attached_file :image
  validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/

  validates_presence_of :name
  validates_presence_of :age
  validates_presence_of :field
  validates_presence_of :content
  validates_presence_of :role
  validates_presence_of :ethnicity
  validates_presence_of :gender

  def self.ethnicities
    [
      "American Indian or Alaska Native",
      "Asian",
      "Black or African American",
      "Hispanic or Latino",
      "Native Hawaiian or Other Pacific Islander",
      "White"
    ]
  end

  def self.roles
    ['mentee', 'mentor', 'parent']
  end

  def self.genders
    ['Female', 'Male']
  end
end
