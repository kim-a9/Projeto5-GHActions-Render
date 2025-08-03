import express from 'express';
import app from './infra/server/server';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
