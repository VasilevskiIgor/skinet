namespace Core.Entities.OrderAggregate
{
    public class OrderItem : BaseEntity
    {
        public OrderItem()
        {
        }

        public OrderItem(ProductItemOrdered ItemOrdered, decimal price, int quantity)
        {
            this.ItemOrdered = ItemOrdered;
            Price = price;
            Quantity = quantity;
        }

        public ProductItemOrdered ItemOrdered { get; set; }

        public decimal Price { get; set;}

        public int Quantity { get; set; }
    }
}