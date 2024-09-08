import random
import csv

# Specify the number of random numbers you want to generate
num_random_numbers = 100

# Generate the random numbers
random_numbers = [random.randint(1, 100) for _ in range(num_random_numbers)]

# Specify the filename
filename = "random_numbers.csv"

# Write the random numbers to the CSV file
with open(filename, mode='w', newline='') as file:
    writer = csv.writer(file)
    
    # Write a header (optional)
    writer.writerow(["Random Number"])
    
    # Write the random numbers
    for number in random_numbers:
        writer.writerow([number])

print(f"Random numbers saved to {filename}")
