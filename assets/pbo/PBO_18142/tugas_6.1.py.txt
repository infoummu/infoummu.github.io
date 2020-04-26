1.	Method constructor
	Method constructor merupakansebuah method yang akanotomatisdipanggilketikaobjek di instantiasi. Constructor umumnyadigunakanuntukmelakukaniniasialisasiterhadapsuatuvariabelatau method. Bentukumum method constructor adalahsebagaiberikut

Class <nama_kelas>
	def_init_(self, <argument-argumen>)
		<statement>
		<statement>
Contoh program
Class konstruktor :
def_init_(self) :
print ‘kalimatiniakanlangsung di cetak\n ketikaobjekdibuat

# program utama
objekKonst = Konstruktor ()

2.	Method destructor
	Method destructor dalam python merupakan method yang menyediakan proses khusussebelumobjek di hancurkan/dealokasi. Method constructor disebut _del_().
Method initidakakandilaksanakansampaisemuareferensikesemuaobjektelah di hapus

Contoh
>>> class C :
. . . 	def_init_(self):
. . . 		print “inisialisasi”
. . . 	def_def_(self):
. . . 		print “ObjekTelahDihapus”
. . .
>>> c1 = C()
Inisialisasi
>>> c2 = c1
>>> c3 = c1
>>> id(c1), id(c2), id(c3)
     (1178956, 11789856, 11789856)
>>>del c1
>>>del c2
>>>del c3
ObjekTelahDihapus

