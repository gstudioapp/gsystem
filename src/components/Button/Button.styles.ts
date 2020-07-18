import { Density, Sizes } from '../../theme/space'

const makeCompactStyles = () => ({
  lg: {
    height: 10,
    minWidth: 10,
    fontSize: Sizes.MEDIUM,
    px: 4
  },
  md: {
    height: 8,
    minWidth: 8,
    fontSize: Sizes.SMALL,
    px: 3
  },
  sm: {
    height: 6,
    minWidth: 6,
    fontSize: Sizes.X_SMALL,
    px: 2
  },
  xs: {
    height: 4,
    minWidth: 4,
    fontSize: Sizes.X_SMALL,
    px: 1
  }
})

const makeDefaultStyles = () => ({
  lg: {
    height: 12,
    minWidth: 12,
    fontSize: Sizes.LARGE,
    px: 6
  },
  md: {
    height: 10,
    minWidth: 10,
    fontSize: Sizes.MEDIUM,
    px: 4
  },
  sm: {
    height: 8,
    minWidth: 8,
    fontSize: Sizes.SMALL,
    px: 3
  },
  xs: {
    height: 6,
    minWidth: 6,
    fontSize: Sizes.X_SMALL,
    px: 2
  }
})

const useStyles = (
  density: Density = Density.DEFAULT,
  size: Sizes = Sizes.MEDIUM
) =>
  ({
    [Density.COMPACT]: makeCompactStyles(),
    [Density.DEFAULT]: makeDefaultStyles()
  }[density][size])

export default useStyles
