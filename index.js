/*
 * This file is part of the Sententiaregum project.
 *
 * (c) Maximilian Bosch <maximilian.bosch.27@gmail.com>
 * (c) Ben Bieler <benjaminbieler2014@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

'use strict';

module.exports = {
  rules: {
    'var-spacing': require('./lib/rules/var-spacing.rule')
  },
  configs: {
    recommended: {
      rules: {
        'varspacing/var-spacing': 2
      }
    }
  }
};
