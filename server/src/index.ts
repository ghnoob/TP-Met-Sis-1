import 'reflect-metadata';
import { Container } from 'typedi';
import Application from './config/application';

const app = Container.get(Application);

app.bootstrap();
