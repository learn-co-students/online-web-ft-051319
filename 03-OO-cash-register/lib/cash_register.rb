class CashRegister

  attr_accessor :total, :discount, :items, :transactions

  def initialize(discount = 0)

    #when we set an argument equal to something, that's it's default value.
    #cr1 = CashRegister.new
    #cr1.discount => 0
    #cr2 = CashRegister.new(20)
    #cr2.discount => 20
    @items = []
    @discount = discount
    @total = 0
    @transactions = []
  end

  def add_item(title, price, quantity = 1)

    # cr = CashRegister.new
    # cr.add_item("apple", 1, 3)
    # cr.total => 3
    # cr.transactions => [3]
    # cr.add_item("tomato", 2, 4)
    # cr.total => 11
    # cr.transactions => [3, 8]

    transaction = quantity * price

    @total += transaction
    @transactions << transaction

    quantity.times do
      # @total += price
      items << title
    end
  end

  def apply_discount
    #self => <#CashRegister 2349802935845 @total = 0, @discount = 0?
    if discount != 0
      @total -= @total * (@discount/100.0)
      "After the discount, the total comes to $#{@total.to_i}."
    else
      "There is no discount to apply."
    end
  end

def void_last_transaction
  #total - last
  @total -= @transactions.pop
end

#  def self.class_method
#    self => CashRegister
#  end

end
