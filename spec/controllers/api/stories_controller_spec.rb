require 'rails_helper'

RSpec.describe Api::StoriesController, type: :controller do
  before(:each) do
    request.env["HTTP_ACCEPT"] = 'application/json'
  end

  describe "GET 'index'" do
    let!(:user_story) { FactoryGirl.create(:story) }
    let!(:featured_story) { FactoryGirl.create(:story, featured: true) }

    it "lists the featured story" do
      get :index
      expect(response_json.count).to eq(1)
      expect(response_json.first[:id]).to eq(featured_story.id)
    end

    context "with featured=false" do
      it "lists the story" do
        get :index, featured: false
        expect(response_json.count).to eq(1)
        expect(response_json.first[:id]).to eq(user_story.id)
      end
    end
  end
end
