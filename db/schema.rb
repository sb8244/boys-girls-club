# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140913173857) do

  create_table "stories", force: true do |t|
    t.string   "name",                           null: false
    t.text     "content",                        null: false
    t.string   "field",                          null: false
    t.integer  "age",                            null: false
    t.integer  "featured",           default: 0, null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "role"
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
    t.string   "gender"
    t.string   "ethnicity"
  end

end
