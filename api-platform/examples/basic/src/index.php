<?php

use ApiPlatform\Core\DataPersister\DataPersisterInterface;
use App\DataProvider\BookDataProvider;

final class BookDataPersister implements DataPersisterInterface {
    public function supports($data): bool
    {
        return false;
    }
    public function persist($data) {}
    public function remove($data) {}
}

$dataPersister = new BookDataPersister();
$dataProvider = new BookDataProvider();

return [$dataProvider, $dataPersister, '/src/api-platform/examples/basic/src/Model'];
