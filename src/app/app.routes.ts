import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'node:path';
import { GetAPIComponent } from '../Component/get-api/get-api.component';
import { InsertBookComponent } from '../Component/insert-book/insert-book.component';

export const routes: Routes = [
    {
        path: 'Get-List',
        component: GetAPIComponent
    },
    {
        path: 'Insert-Book',
        component: InsertBookComponent
    }
];
