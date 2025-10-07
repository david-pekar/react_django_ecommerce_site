from django.db import models
from django.contrib.auth.models import User

# Product in the Store
class Product(models.Model):
    CATEGORY_CHOICES = [
        ('phone', 'Phone'),
        ('laptop', 'Laptop'),
    ]

    name = models.CharField(max_length=100)
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)
    brand = models.CharField(max_length=100)
    model = models.CharField(max_length=100)
    storage = models.CharField(max_length=50, blank=True)
    color = models.CharField(max_length=50, blank=True)
    ram = models.CharField(max_length=50, blank=True)
    processor = models.CharField(max_length=100, blank=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField(blank=True)

    def __str__(self):
        return f"{self.brand} {self.model}"
    
# Cart
class Cart(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='cart')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Cart for {self.user.username}"

    def total_price(self):
        # Sum all cart items (quantity * product price)
        return sum(item.total_price() for item in self.items.all())
    
class CartItem(models.Model):
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE, related_name='items')
    product = models.ForeignKey('Product', on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)

    def __str__(self):
        return f"{self.quantity} × {self.product}"

    def total_price(self):
        return self.quantity * self.product.price