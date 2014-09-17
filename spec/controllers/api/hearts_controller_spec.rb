require 'rails_helper'

RSpec.describe Api::HeartsController, :type => :controller do
  let!(:story) { FactoryGirl.create(:story) }

  describe 'GET index' do
    let!(:heart) { Heart.create!(story: story, uuid: "test") }

    it "lists the heart" do
      get :index, uuid: "test"
      expect(response_json.first[:id]).to eq(heart.id)
    end
  end

  describe 'POST toggle' do
    context "without a heart" do
      it "creates a heart" do
        expect {
          post :toggle, uuid: "test", story_id: story.id
        }.to change{ Heart.count }.by(1)
      end

      it "increases the heart count" do
        expect {
          post :toggle, uuid: "test", story_id: story.id
        }.to change{ story.reload.heart_count }.to(1)
      end

      context "with a heart" do
        let!(:heart) { Heart.create!(story: story, uuid: "test") }

        it "destroys the heart" do
          expect {
            post :toggle, uuid: "test", story_id: story.id
          }.to change{ Heart.count }.by(-1)
        end

        it "decreases the heart count" do
          expect {
            post :toggle, uuid: "test", story_id: story.id
          }.to change{ story.reload.heart_count }.to(-1)
        end
      end
    end
  end
end
