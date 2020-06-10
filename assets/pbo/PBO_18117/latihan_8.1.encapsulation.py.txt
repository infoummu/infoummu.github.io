class Mahasiswa:
    nama=""
    kelas=""
    jurusan=""
    def __init__(self,nama,kelas,jurusan):
            self.nama =nama
            self.__kelas =kelas
            self.jurusan = jurusan
    def tampil(self):
        print("Nama :",self.nama)
        print("Kelas :", self.__qkelas)
        print("jurusan :", self.jurusan)
#objek
siswa1=Mahasiswa("Daniel","3","Sistem Informasi")
siswa1.tampil()
print("kelas:",siswa1.kelas)