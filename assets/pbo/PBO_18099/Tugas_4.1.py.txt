#Buatlah list menggunakan fungsi Append, Extend, dan Insert serta Jelaskan Perbedaannya

#contoh 1 : list dengan menggunakan fungsi append
my_friends = ["Anggun", "Dian", "Agung", "Adi", "Adam"]
my_friends.append("vivi")

# Tampilkan isi list my_friends dengan nomer indeks 3
print("Isi my_friends indeks ke-3 adalah: {}".format(my_friends[3]))

# Tampilkan semua daftar teman
print("Semua teman: ada {} orang".format(len(my_friends)))
for friend in my_friends:
    print("friend", friend)

#contoh 2 : list dengan menggunakan fungsi append
ganjil = [1,3,5,7]
ganjil.append(9)

print("Tampilkan nilai ganjil : ", ganjil)
#---------------------------------------------------------------------------------------

#contoh 1 : list dengan menggunakan fungsi extend
my_friends = ["Anggun", "Dian", "Agung", "Adi", "Adam"]
my_friends.extend(my_friends)

# Tampilkan isi list my_friends dengan nomer indeks 3
print("Isi my_friends indeks ke-3 adalah: {}".format(my_friends[3]))

# Tampilkan semua daftar teman
print("Semua teman: ada {} orang".format(len(my_friends)))
for friend in my_friends:
    print("friend", friend)

#contoh 2 : list dengan menggunakan fungsi extend
ganjil = [1,3,5,7]
ganjil.extend(ganjil)

print("Tampilkan nilai ganjil : ", ganjil)
#---------------------------------------------------------------------------------------

#contoh list dengan menggunakan fungsi insert
my_friends = ["Anggun", "Dian", "Agung", "Adi", "Adam"]
my_friends.insert(4, "Adi")

# Tampilkan isi list my_friends dengan nomer indeks 3
print("Isi my_friends indeks ke-3 adalah: {}".format(my_friends[3]))

# Tampilkan semua daftar teman
print("Semua teman: ada {} orang".format(len(my_friends)))
for friend in my_friends:
    print("friend", friend)

#contoh 2 : list dengan menggunakan fungsi insert
ganjil = [1,3,5,7]
ganjil.insert(4,9)

print("Tampilkan nilai ganjil : ", ganjil)

#perbedaannya :
#Append berfungsi untuk menambahkan anggota ke dalam list.
#Extend berfungsi untuk memanbahkan data pada variabel.
#Insert berfungsi untuk menyisipkan anggota list pada indeks tertentu.

#---------------------------------------------------------------------------------------

#jelaskan perbedaan antara fungsi reverse dengan sort serta berikan contohnya
#1) reverse berfungsi untuk menghasilkan iterator yang berisi kebalikan dari suatu sequence.
#Contohnya :
string = 'angka' 
print(list(reversed(string)))

lst = [1,2,3,4,5] 
print(list(reversed(lst)))

#2) sort berfungsi untuk mengurutkan suatu iterable baik secara naik maupun turun.
#contohnya :
pylist = ['e','a','u','i','o']
word = 'Python'

print(sorted(pylist))
print(sorted(word))
print(sorted(pylist, reverse=True))

def takesecond(elem):
    return elem[1]

random = [(2,2), (3,4), (4,1), (1,3)]
sortedlist = sorted(random, key=takesecond)
print('Sorted list:', sortedlist)