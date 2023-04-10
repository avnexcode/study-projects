<div class="container mt-5">
    <h1>Hello Mahasiswa</h1>
    <?php Flasher::flash() ?>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col-2">Action</th>
                <th scope="col-2">Action</th>
            </tr>
        </thead>
        <?php foreach ($data["mhs"] as $i => $data) : ?>
            <tbody class="">
                <tr>
                    <th scope="row"><?= $i + 1 ?></th>
                    <td><?= $data["username"] ?></td>
                    <td><a class="btn btn-primary btn-sm" href="<?= BASEURL ?>/mahasiswa/detail/<?= $data["id"] ?>">Detail</a></td>
                    <td><a class="btn btn-danger btn-sm" href="<?= BASEURL ?>/mahasiswa/delete/<?= $data["id"] ?>" onclick="return confirm('Yakin menghapus ?')">Delete</a></td>
                </tr>
            </tbody>
        <?php endforeach; ?>
    </table>
    <div class="container">
        <a href="<?= BASEURL ?>/mahasiswa/insert" class="btn btn-primary">Add Data</a>
    </div>
</div>