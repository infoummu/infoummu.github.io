#Studi kasus menggunakan fungsi method
class Karyawan:
    '''Dasar kelas untuk semua karyawan'''
    jumlah_karyawan = 0

    def __init__(self, nama, gaji):
        self.nama = nama
        self.gaji = gaji
        Karyawan.jumlah_karyawan += 1

    def tampilkan_jumlah(self):
        print("Total karyawan:", Karyawan.jumlah_karyawan)

    def tampilkan_profil(self):
        print("Nama :", self.nama)
        print("Gaji :", self.gaji)

# Membuat objek pertama dari kelas Karyawan
karyawan1 = Karyawan("Sarah", 1000000)
# Membuat objek kedua dari kelas Karyawan
karyawan2 = Karyawan("Budi", 2000000)

karyawan1.tampilkan_profil()
karyawan2.tampilkan_profil()
print("Total karyawan :", Karyawan.jumlah_karyawan)


#Constructor  adalah method khusus yang akan dijalankan secara otomatis pada saat
#sebuah objek dibuat (instansiasi), yakni ketika perintah “new” dijalankan.

#Contoh method constructor
class Mobil:
    def __init__(self):
        print("Ini adalah method constructor")

    def maju(self):
        print("Mobil saya sedang bergerak maju.")

    def berhenti(self):
        print("Mobil saya sedang berhenti.")
    
def main():
    avanza = Mobil()
    avanza.maju()
    avanza.berhenti()

main()


#Destructor adalah method khusus yang 
#dijalankan secara otomatis pada saat sebuah objek dihapus. 

# Python program to illustrate destructor 
class Employee: 
  
    # Initializing 
    def __init__(self): 
        print('Employee created.') 
  
    # Deleting (Calling destructor) 
    def __del__(self): 
        print('Destructor called, Employee deleted.') 
  
obj = Employee() 
del obj 