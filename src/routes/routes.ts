import { Router, Request, Response } from 'express'
export const router = Router()

// Rutas
import { router as Usuarios } from './usuario.routes'
import { router as Secciones } from './seccion.routes'
import { router as Sucursales } from './sucursal.routes'
import { router as Modulos } from './modulos.routes'
import { router as Empresas } from './empresas.routes'
import { router as Cargos } from './cargo.routes'
import { router as Areas } from './area.routes'
import { router as Estados } from './estados.routes'
import { router as Tipos } from './tipo.routes'
import { router as Parametros } from './parametros.routes'

router.use(Usuarios)
router.use(Secciones)
router.use(Sucursales)
router.use(Modulos)
router.use(Empresas)
router.use(Cargos)
router.use(Areas)
router.use(Estados)
router.use(Tipos)
router.use(Parametros)
