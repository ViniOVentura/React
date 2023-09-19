import { Box, Modal } from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';

export default function ModalComments({ open, handleClose }) {
    return (

        <Modal
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
            open={open}
            onClose={handleClose}
            keepMounted
            sx={{
                position: 'fixed',
                zIndex: 1300,
                right: 0,
                bottom: 0,
                top: 0,
                left: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                "&.MuiModal-hidden": {
                    visibility: 'hidden'
                }
            }}

        >
            <Box style={{
                backgroundColor: 'rgba(35,35,66,255)',
                width: 400,
                borderRadius: '12px',
                padding: '64px',
                position: 'relative',

            }}>
                <Box style={{ position: 'absolute', top: 32, right: 32, cursor: 'pointer' }}
                    onClick={handleClose}>
                    <CloseIcon htmlColor="#72748e" fontSize='large' />
                </Box>

            </Box>
        </Modal>
    )
}