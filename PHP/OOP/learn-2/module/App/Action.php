<?php

class Action
{
    private static $rows = [];

    public static function setData($row)
    {
        self::$rows[] = $row;
    }

    public static function consoleData()
    {
        foreach (self::$rows as $data) {
            return "$data<hr><hr><hr>";
        }
    }
}
