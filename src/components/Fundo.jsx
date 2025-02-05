import { Box } from '@mui/material';
import PropTypes from 'prop-types';

const Fundo = ({ children }) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url(/imagens/back.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -2,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(18, 17, 19, 1)',
          opacity: 0.6,
          zIndex: -1,
        }}
      />
      {children}
    </Box>
  );
};

Fundo.propTypes = {
  children: PropTypes.node,
};

export default Fundo;
