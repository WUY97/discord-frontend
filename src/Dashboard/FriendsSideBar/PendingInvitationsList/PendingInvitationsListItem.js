import React, { useState } from 'react'
import { Tooltip } from '@mui/material'
import { Typography } from '@mui/material';
import Box from '@material-ui/core/Box';
import { connect } from 'react-redux';

import Avatar from '../../../shared/components/Avatar';
import InvitationDecisionButtons from './InvitationDecisionButtons';
import { getActions }  from '../../../store/actions/friendsActions';

const PendingInvitationsListItem = ({
    id,
    username,
    mail,
    acceptFriendInvitation = () => {},
    rejectFriendInvitation = () => {},
}) => {
    const [buttonsDisabled, setButtonsDisabled] = useState(false);

    const handleAcceptInvitation = () => {
        acceptFriendInvitation({id});
        setButtonsDisabled(true);
    }

    const handleRejectInvitation = () => {
        rejectFriendInvitation({id});
        setButtonsDisabled(false);
    }

    return (
        <>
            <Tooltip title={mail}>
                <div style={{width:'100%'}}>
                    <Box
                        style={{
                            width:'100%',
                            height: '42px',
                            marginTop: '10px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Avatar username={username} />
                        <Typography
                            sx={{
                                marginLeft: '7px',
                                fontWeight: 700,
                                color: '#8e9297',
                                flexGrow: 1,
                            }}
                            variant='subtitle1'
                        >
                            {username}
                        </Typography>
                        <InvitationDecisionButtons
                            disabled={buttonsDisabled}
                            acceptInvitationHandler={handleAcceptInvitation}
                            rejectInvitationHandler={handleRejectInvitation}
                        />
                    </Box>
                </div>
            </Tooltip>
        </>
    );
};

const mapActionsToProps = (dispatch) => {
    return {
        ...getActions(dispatch),
    };
};

export default connect(null, mapActionsToProps)(PendingInvitationsListItem);
