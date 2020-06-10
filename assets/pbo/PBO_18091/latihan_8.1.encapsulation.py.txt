class Mahasiswa:
    nama=""
    __kelas=""
    jurusan=""
    def __init__(self,nama,kelas,jurusan):
        self.nama=nama
        self.kelas=kelas
        self.jurusan=jurusan
    def tampil(self):
        print("nama: ",self.nama)
        print("kelas :",self.kelas)
        print("jurusan: ",self.jurusan)

#objek
siswa1 = Mahasiswa("claudio","3","sistem informasi")
siswa1.tampil()
print("kelas:",siswa1.kelas)
    
