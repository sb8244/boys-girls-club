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
      expect(response_json.first[:hearted]).to eq(false)
    end

    context "with featured=false" do
      it "lists the story" do
        get :index, featured: false
        expect(response_json.count).to eq(1)
        expect(response_json.first[:id]).to eq(user_story.id)
      end
    end

    context "with hearts" do
      let!(:heart) { Heart.create!(uuid: "test", story: featured_story) }

      it "has the story hearted" do
        get :index, uuid: "test"
        expect(response_json.first[:hearted]).to eq(true)
      end
    end
  end
end
