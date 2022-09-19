/**
 * 
 * This is the place where tests must be implemented.
 * 
 */

import React from 'react'
import { Base as Label } from './Label.stories'
import { render } from '@testing-library/react';

test('it renders without crash', () => {
  render(<Label />)
})