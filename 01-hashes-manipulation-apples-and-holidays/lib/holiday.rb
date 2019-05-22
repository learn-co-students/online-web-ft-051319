require 'pry'

def second_supply_for_fourth_of_july(holiday_hash)
  # given that holiday_hash looks like this:
  # {
  #   :winter => {
  #     :christmas => ["Lights", "Wreath"],
  #     :new_years => ["Party Hats"]
  #   },
  #   :summer => {
  #     :fourth_of_july => ["Fireworks", "BBQ"]
  #   },
  #   :fall => {
  #     :thanksgiving => ["Turkey"]
  #   },
  #   :spring => {
  #     :memorial_day => ["BBQ"]
  #   }
  # }
  # return the second element in the 4th of July array
    holiday_hash[:summer][:fourth_of_july][1]
end

def add_supply_to_winter_holidays(holiday_hash, supply)
  # holiday_hash is identical to the one above
  # add the second argument, which is a supply, to BOTH the
  # Christmas AND the New Year's arrays
  holiday_hash[:winter].each do |holiday, supplies|
     supplies << supply
   end
end


def add_supply_to_memorial_day(holiday_hash, supply)
  # again, holiday_hash is the same as the ones above
  # add the second argument to the memorial day array
end

def add_new_holiday_with_supplies(holiday_hash, season, holiday_name, supply_array)
  # code here
  # remember to return the updated hash
    holiday_hash[season][holiday_name] = supply_array
    holiday_hash
  end

def all_winter_holiday_supplies(holiday_hash)
  # return an array of all of the supplies that are used in the winter season
end

def all_supplies_in_holidays(holiday_hash)
  # iterate through holiday_hash and print items such that your readout resembles:
  # Winter:
  #   Christmas: Lights, Wreath
  #   New Years: Party Hats
  # Summer:
  #   Fourth Of July: Fireworks, BBQ
  # etc.
  holiday_hash.each do |season, holidays|
      puts "#{season.capitalize}:"
  holidays.each do |holiday, supplies|
    puts "  #{holiday.to_s.split("_").map{|word| word.capitalize}.join(" ")}: #{supplies.join(", ")}"
  end
    #type out what the return value is of each thing before we call the next method, or enter the next chain
    # holiday => :memorial_day
    # holiday.to_s => "memorial day"
    # holiday.to_s.split("_") => ["memorial", "day"]
    # holiday.to_s.split("_".map{...word.capitalize}) => ["Memorial", "Day"]
    # holiday.to_s.split("_".map{...word.capitalize}).join(" ") => "Memorial Day"
  end
end

def all_holidays_with_bbq(holiday_hash)
  # return an array of holiday names (as symbols) where supply lists
  # include the string "BBQ"
  bbq_holidays = []
  holiday_hash.each do |season, holidays|
    holidays.each do |holiday, supplies|
      if supplies.include?("BBQ")
        bbq_holidays << holiday
      end
    end
  end
  bbq_holidays
end
