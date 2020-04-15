#Pada bahasa pemograman python,dictionary berarti struktur data yang bentuknya menyerupai kamus. 
#Dictionary pada python digunakan untuk memudahkan programer dalam menginput suatu indeks. 
#Penggunaan dictionary pada python dapat meng-efesiensi kan waktu  pengerjaan dari programer 
#tersebut. Dalam penggunaan dictionary berbeda dengan list atau tuple, 
#pada dictionary memiliki kunci berupa teks ataupun angka sedangkan pada list dan tuple 
#menggunakan indeks berupa angka saja untuk mengakses nilainya

#Contoh cara membuat Dictionary pada Python

dict = {'Name': 'Zara', 'Age': 7, 'Class': 'First'}
print ("dict['Name']: ", dict['Name'])
print ("dict['Age']: ", dict['Age'])

#Update dictionary python

dict = {'Name': 'Zara', 'Age': 7, 'Class': 'First'}
dict['Age'] = 8; # Mengubah entri yang sudah ada
dict['School'] = "DPS School" # Menambah entri baru

print ("dict['Age']: ", dict['Age'])
print ("dict['School']: ", dict['School'])

#Contoh cara menghapus pada Dictionary Python

dict = {'Name': 'Zara', 'Age': 7, 'Class': 'First'}

del dict['Name'] # hapus entri dengan key 'Name'
dict.clear()     # hapus semua entri di dict
del dict         # hapus dictionary yang sudah ada

print ("dict['Age']: ", dict['Age'])
print ("dict['School']: ", dict['School'])