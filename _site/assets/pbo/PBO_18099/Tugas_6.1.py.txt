#Konsep Dari Method Constructor dan Destructor Beserta Contohnya

# a) Method Constructor
#Method constructor merupakan sebuah method yang akan otomatis dipanggil ketika objek di instantiasi.
#Constructor umumnya digunakan untuk melakukan inisialisasi terhadap suatu variabel atau method.

#Contoh Method Constructor

class C:
    def __init__(self):
        print('Constructor called.')

    def see(self):
        print('C')

obj = C()
obj.see()


# b) Method Descructor
#Destruktor dapat melakukan kebalikan dari konstruktor, tetapi itu tidak selalu benar.
#Itu bisa melakukan sesuatu yang berbeda. Destuktor adalah fungsi yang disebut ketika suatu objek dihapus atau dihancurkan.

#Contoh Method Descructor

class Vehicle:
    def __init__(self):
        print('Vehicle created.')

    def __del__(self):
        print('Destructor called, vehicle deleted.')

car = Vehicle() # this is where the object is created and the constructor is called
del car  # this is where the destructor function gets called

#Contoh studi kasus menggunakan fungsi method

def hitung_gaji():
	gaji=1500000
	lembur=500000
	transport=500000
	bpjs=50000
	total=gaji+lembur+transport-bpjs
	print(f"Total gaji yang diterima Rp {total}")
	print()
	a=(input("Apakah kariawan ini mendapatkan bonus y/t? "))
	if a =="y":
		bns=(input("Berapa persen bonus yang didapat (7%-10 %)? "))
		if bns =="7":
			totalbonus=total*0.07
			totalgaji=total+totalbonus
			print()
			print(f"Total gaji yang diterima {nama} Rp {totalgaji}")

		elif bns =="8":
			totalbonus=total*0.08
			totalgaji=total+totalbonus
			print()
			print(f"Total gaji yang diterima {nama} Rp {totalgaji}")

		elif bns =="9":
			totalbonus=total*0.09
			totalgaji=total+totalbonus
			print()
			print(f"Total gaji yang diterima {nama} Rp {totalgaji}")

		elif bns =="10":
			totalbonus=total*0.1
			totalgaji=total+totalbonus
			print()
			print(f"Total gaji yang diterima {nama} Rp {totalgaji}")
		else:
			print("Keyword salah!")

	elif a =="t":
		print("Terima kasih")
	else:
		print("Keyword salah!")

print("======SELAMAT DATANG=======")
nama=(input("Masukan nama karyawan :"))
hitung_gaji()