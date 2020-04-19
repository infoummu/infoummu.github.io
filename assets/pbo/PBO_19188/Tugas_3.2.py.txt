#1. Fungsi-fungsi operator bitwise
#&  = operasi bitwise "and" ini akan memproses bit per bit dari kedua variabel, jika kedua bit sama-sama 1, maka hasilnya juga 1, selain kondisi tersebut,nilai akhirnya adalah 0
#|  = hasilnya akan bernilai 0 jika kedua bit bernilai 0, selain itu nilai bit akan di set menjadi 1
#^  = hasilnya akan bernilai 1 jika salah satu dari kedua variabel bernilai 1 (namun tidak keduanya). atau dengan kata lain jika kedua bit berlainan, hasilnya 1 tapi kalau sama-sama 0 atau sama-sama 1, hasilnya 0.
#~  = operasi not yang akan membalikan nilai bit sebuah variabel dari 0 menjadi 1, dan 1 menjadi 0. namun perhitungan bit ini sedikit membinggungkan karena jika kita membalikan seluruh bit saja, hasilnya tidak sesuai dengan apa yang dihitung python.
#     ini berkaitan dengan cara bahasa python menyimpan angka biner. angka biner di dalam bahasa python disimpan dalam format "two complement". secara singkat, rumusnya adalah "-x - 1", sehingga ~x = -10 - 1 = 11 (desimal).
#<< = operator shift left dimana nilai dari sebuah variabel akan digeser sebanyak 1 digit ke kiri. ketika hasil pergeseran ke kiri, digit paling kanan akan diisi angka 0. setiap pergeseran 1 tempat ke kiri akan mengkali 2 nilai asal.
#>> = operator shift right dimana bahasa python akan menggeser posisi bit dalam sebuah variabel ke kanan sebanyak 1 tempat. hasilnya akan menggeser nilai variabel ke arah kanan, sehingga digit paling kanan akan dihapus.

#2. contoh kasus operator tenary

a=int(input("Masukan Nilai a = "))
b=int(input("Masukan Nilai b = "))

if a != b:
    if a > b:
        print ("a lebih besar dari b")
    else:
        print("b lebih besar dari a")
else:
    print("nilai a dan b sama besar")