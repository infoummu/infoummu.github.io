#1. penjelasan constructor dan destructor
#constructor merupakan metode spesial yang dieksekusi saat kita membuat sebuah objek kelas
#constructor didefinisikan mengunakan __init__()
class Car:
    def __init__(self):
        print("Hello World")
        print("--------------------")
car = Car()

#destructor dijalankan ketika objek di hancurkan(destroy)
#destructor bisa sangat berguna dalam melenggangkan resources sebelum keluar dari program seperti menutup file, mengosongkan memori, dll
#destructor didefinisikan mengunakan __del__()

class Vehicle:
    def __init__(self):
        print('vehicle created')
    def __del__(self):
        print('memanggil destructor, vechicle deleted.')
        print("--------------------")
car = Vehicle()
print("Hello World")
print("--------------------")

#2. Studi Kasus

from datetime import datetime, date

print("Your date of birth (dd mm yyyy)")
date_of_birth = datetime.strptime(input("--->"), "%d %m %Y")

def calculate_age(born):
    today = date.today()
    return today.year - born.year - ((today.month, today.day) < (born.month, born.day))

age = calculate_age(date_of_birth)

print(age)
print("--------------------")