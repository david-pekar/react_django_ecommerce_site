from django.db import models

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