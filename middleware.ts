import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { withLocales } from 'nextra/locales'

export const middleware = withLocales(request => {
    // Your middleware code...
  })