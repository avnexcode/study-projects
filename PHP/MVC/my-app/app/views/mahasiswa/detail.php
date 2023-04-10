<div class="container">
    <h1>Detail User</h1>
    <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title"><?= $data["user"]["username"] ?></h5>
            <p class="card-text"><?= $data["user"]["email"] ?></p>
            <p class="card-text"><?= $data["user"]["nohp"] ?></p>
            <a href="<?= BASEURL ?>/mahasiswa" class="btn btn-primary">back</a>
            <a href="<?= BASEURL ?>/mahasiswa/delete/<?= $data["user"]["id"] ?>" class="btn btn-danger" onclick="return confirm('Yakin menghapus ?')">Delete</a>
        </div>
    </div>
</div>